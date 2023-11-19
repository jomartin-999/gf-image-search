# gf-image-search
An image search app using GemFire vectorDB

This is currently a work in progress. 

To run this app
- navigate to the 'frontend' directory
- run `npm install`
- run `npm run build`
- naviagte to the `backend` directory
- You WILL need to add two directories to the "backend directory" : backend/static/images.  This is where you'll need to put your images to run through the model.
- [This link](https://public.ukp.informatik.tu-darmstadt.de/reimers/sentence-transformers/datasets/unsplash-25k-photos.zip), will download a 25k image dataset to use OR you can use any photos or dataset of images you choose. 
- run `python app.py`
