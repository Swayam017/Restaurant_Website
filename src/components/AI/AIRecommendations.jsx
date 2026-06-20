import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./AIRecommendations.module.css";

function AIRecommendations() {
  const cartCtx = useContext(CartContext);

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setRecommendations([]);
      return;
    }

    generateRecommendations();
  }, [cartCtx.items]);

  async function generateRecommendations() {
    console.log(import.meta.env.VITE_GEMINI_API_KEY);
    try {
      setLoading(true);

      const cartItems = cartCtx.items
        .map((item) => item.name)
        .join(", ");

      const prompt = `
User has ordered:
${cartItems}

Recommend 3 restaurant items that pair well with these dishes.

Return ONLY a JSON array.

Example:
["Coke","Garlic Bread","Chocolate Cake"]
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      console.log("Gemini Response:", data);

      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to get recommendations");
      }

      const text =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";

      const cleanText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      try {
        const parsed = JSON.parse(cleanText);

        if (Array.isArray(parsed)) {
          setRecommendations(parsed);
        } else {
          setRecommendations([]);
        }
      } catch (err) {
        console.error("JSON Parse Error:", err);
        setRecommendations([]);
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={classes.recommendations}>
      <h2>🍽 Recommended For You</h2>

      {loading && <p>Loading recommendations...</p>}

      {!loading &&
        recommendations.length > 0 && (
          <ul>
            {recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

      {!loading &&
        recommendations.length === 0 &&
        cartCtx.items.length > 0 && (
          <p>No recommendations available.</p>
        )}
    </div>
  );
}

export default AIRecommendations;