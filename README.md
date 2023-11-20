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
- Currently, when a user clicks "load embeddings" the application randomly selects and encodes 1500 images.  Working to include embeddings on all 25k images from the data set.
- The "load embeddings" currently takes about ~20 minutes for 1500 images.
- Results returned will filter out results that have a score less than .60.
 

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
- naviagte to the `backend` directory
- You WILL need to add two directories to the "backend directory" : backend/**static**/**images**.  This is where you'll need to put your images to run through the model.
- [This link](https://public.ukp.informatik.tu-darmstadt.de/reimers/sentence-transformers/datasets/unsplash-25k-photos.zip), will download a 25k image dataset to use OR you can use any photos or dataset of images you choose. 
- run `python app.py`


