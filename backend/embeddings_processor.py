from datetime import datetime
from itertools import islice

from sentence_transformers import SentenceTransformer
from PIL import Image
import random
import os


def load_embeddings(images_folder):
    images = [f'backend/static/images/{image}' for image in os.listdir('backend/' + images_folder) if
              image.lower().endswith('.jpg')]

    random_images = random.sample(images, 1500)
    embeddings_to_load = {"embeddings": []}

    start_time = datetime.now()
    start_timestamp_string = start_time.strftime("%Y-%m-%d %H:%M:%S")

    print("Creating Embedding: " + start_timestamp_string)
    for index, image in enumerate(random_images):
        vector = create_vector_from_image(image)
        image_embedding = {"key": os.path.basename(image), "vector": vector.tolist()}
        embeddings_to_load["embeddings"].append(image_embedding)
        if index % 100 == 0:
            print("Processing image index:", index)

    end_time = datetime.now()
    end_timestamp_string = end_time.strftime("%Y-%m-%d %H:%M:%S")
    print("Embeddings Created: " + end_timestamp_string)

    return embeddings_to_load


def create_vector_from_image(image):
    model = SentenceTransformer('clip-ViT-B-32')
    image_vector = model.encode(Image.open(image))
    return image_vector


def create_query_embedding(search_query):
    model = SentenceTransformer('clip-ViT-B-32')
    query_vector = model.encode(search_query)
    query_embedding = {
        "embedding-type": "float",
        "embedding": query_vector.tolist(),
        "k": 100,
        "k-per-bucket": 100,
        "include-metadata": False
    }

    return query_embedding
