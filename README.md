# gf-image-search
An image search app using GemFire vectorDB

## Requirements
- python
- node 18+
- npm
- GemFire
- GemFire vectorDB extension
- React
- Flask (python webserver)

There are a few python packages you may need to install such as:
- sentence Transformer 
- pytorch
- PIL
- there may be others. You'll have to build and see what you have or don't have.

## Things to know
- Currently, when a user clicks "load embeddings" the application will:
  1. Determine if the `backend/static/images` directory exists and if there are any files in that directory.
     2. If the directory does not exist, the application will create the directory, download the images dataset (~1.9 GB), unizip the file, and extract the images to the directory (~25k images)
     3. If the directory DOES exist, then it will skip the above step.
  2. Determine if the precomputed embeddings file exists. If it does not, then it will download the file.
  3. The precomputed embeddings are then loaded into GemFire.

If you would like to use your own images data set:
  - The images must be placed in a folder with a path `backend/static/images`
  - The images must be `.jpg` files.
  - You must set `use_precomputed_embeddings` in the `embeddings_processor.py` to **False**. 
  - The application will randomly select and encode 1500 images from this folder. This is only because the encoding takes time and memory. You can adjust this number if needed in the `embeddings_processor.py` file.  
  - With 1500 images it currently takes about ~20 minutes to encode them. 

When searching images 
- The application filters out results that have a score less than .60. This set in the `app.py` file, in the `/searchImages` endpoint.
- The search query sets 'k:100' - this means it will return the top 100 results from the query. This is set in the `embeddings_processor.py` -> `def create_query_embedding(search_query):` 
 

## To run this app

### GemFire
- Download the GemFire vector DB extension and put the .gfm file into the GemFire extensions directory.
- start a GemFire locator
- start a GemFire server. Start the rest api and set the `http-service-port` 
  `start server --start-rest-api --http-service-port=8081 --name=vectorDBServer`

### The Application
- navigate to the 'frontend' directory
- run `npm install`
- run `npm run build`
- navigate to the `backend` directory
- run `python app.py`

[Image Data Set](https://public.ukp.informatik.tu-darmstadt.de/reimers/sentence-transformers/datasets/unsplash-25k-photos.zip)
