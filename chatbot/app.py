from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
# openai.api_key = ""


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        user_input = request.form.get("user_input")
        chat_history = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful medical chatbot."},
                {"role": "user", "content": user_input},
            ],
        )
        chat_response = chat_history["choices"][0]["message"]["content"]
        return render_template(
            "index.html", user_input=user_input, chat_response=chat_response
        )
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chatbot():
    data = request.json
    user_input = data.get("message")
    chat_history = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful medical chatbot."},
            {"role": "user", "content": user_input},
        ],
    )
    chat_response = chat_history["choices"][0]["message"]["content"]
    return jsonify({"response": chat_response})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
