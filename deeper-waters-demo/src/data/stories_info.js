var storyList = [];

registerStory(
    "Joshua, Emperor Frog",
    "Author",
    "Hook",
    "Many years ago, a young lad by the name of ‘Red’ McCarthy was walking alongside the Erie Canal when he happened upon a tadpole swimming in the water. Curious, Red scooped up the tadpole, gave him the name Joshua, and carried him back to his home in Rome. Under Red’s care Joshua grew into a healthy bull frog, but one night he decided to return to the wetlands where he belonged.",
    "/pages/stories/joshua-emperor-frog/joshua-emperor-frog",
    // "Cover Image with 16:9 Dimensions - has defualt",
    // "Banner Image with 5:1 Dimensions - has defualt",
    // "Alt Text - has defualt"
)
registerStory(
    "Buzzos Music Store",
    "Author",
    "Hook",
    "Breif",
    "/pages/stories/buzzos/buzzos",
    // "Cover Image with 16:9 Dimensions - has defualt",
    // "Banner Image with 5:1 Dimensions - has defualt",
    // "Alt Text - has defualt"
)
registerStory(
    "Mount Hope Cemetry",
    "Author",
    "The first municipal victorian cemetery in the United States",
    "Mount Hope Cemetery, founded in 1838, is the first municipal victorian cemetery in the United States, using the cemetery of Mt. Auburn in Boston as a prototype, Mount Hope was designed not as a crowded churchyard, but as a park-like landscape meant to be used by the people of Rochester as a communal space to gather. Two notable figures buried here are Susan B. Anthony who played a pivotal role in women's suffrage, and Frederick Douglass who was the most important leader of the abolitionist movement in the 19th century. The number of people who permanently reside here is more than 350,000.",
    "/pages/stories/mount-hope/mount-hope"
)
// example registerStory Function; copy and go through and replace with story info.
// registerStory(
//     "Title",
//     "Author",
//     "Hook",
//     "Breif",
//     "Website Page Reference",
//     "Cover Image with 16:9 Dimensions - has defualt",
//     "Banner Image with 5:1 Dimensions - has defualt",
//     "Alt Text - has defualt"
// )


// Registers custom story info into storyList objects using 16:9 picsum placeholder images
function registerStory(title, author, hook, breif, pageRef,
    image = `https://picsum.photos/seed/${storyList.length+1}/800/450`, // placeholder 16:9 image 
    featuredImage = `https://picsum.photos/seed/${storyList.length+1}/1200/675`, // placeholder featured 16:9 image
    altText = `Cover image for ${title}`) // default alt Text
{
  const id = storyList.length + 1
  storyList.push({
    id,
    title,
    author,
    hook,
    // the breif/snapshot of the story is stored in .txt file within same folder
    breif, 
    pageRef,
    image,
    featuredImage,
    altText,
  })
}
// formatedName = getCleanedStoryName(title)
//../stories/${formatedName}/${formatedName}
function getCleanedStoryName(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove non-alphanumeric characters (keeps spaces)
    .trim()                       // Remove leading and trailing spaces
    .replace(/\s+/g, '-');        // Replace spaces (including multiple consecutive ones) with '-'
}

export default storyList;