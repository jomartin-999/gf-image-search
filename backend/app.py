from flask import Flask, send_from_directory, request, jsonify, url_for
import os

app = Flask(__name__, static_url_path='', static_folder="../frontend/build")
app.config['IMAGES_FOLDER'] = 'static/images'
app.add_url_rule('/images/<path:filename>', endpoint='serve_images')


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/loadEmbeddings')
def load_embeddings():
    return ""


@app.route('/images/<path:filename>')
def serve_images(filename):
    images_folder = app.config['IMAGES_FOLDER']
    return send_from_directory(images_folder, filename)



@app.route('/searchImages', methods=['POST'])
def search_images():
    try:
        data = request.get_data(as_text=True)
        result = f"Search images with query: {data}"

        image_urls = [   ]

        print(image_urls)

        return jsonify(image_urls)

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
