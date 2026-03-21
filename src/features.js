/* FEATURE FLAG
How to make files(pages and components) hidden or shown in production or development stages: 
The relevant files are:
- .env = there you decide if things are visible in prod, aka live for everyone.
- .env.development = there you decide if things are visible in development, aka you can see it while on local host working on the page.

Add the new feature to these two files and write true or false depending on if you want it to be visible in the different states. 

Then you give them a name in this file and write the same as already written. This only needs to be done for .env . 
"gallery: import.meta.env.VITE_FEATURE_PRODUCTGALLERY==="true""
gallery, in this case is a costum name you give to the file, Is should allways say " ==="true" ".

After that you can use the name in the file where the feature is used. 

you write "feature.NAME &&" before the opening and closing braces like this, you also need the curly brackets:
 {features.gallery && <Route path="/produkt-galleri" element={<ProductGallery />} />}

if it is a whole page, you can write the line in the main.jsx file around the route. 
if it is a component, you can write it in the file where the component is used, not it the file its made 

Remember to import the features from this file where you want to implement the rule.
import { features } from "../features.js";
*/



export const features = {
  gallery: import.meta.env.VITE_FEATURE_PRODUCTGALLERY==="true",
  dividedSection: import.meta.env.VITE_FEATURE_DIVIDEDSECTION==="true",
  carousel:import.meta.env.VITE_FEATURE_CAROUSEL==="true"

}