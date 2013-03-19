search
===
Combine search in youtube, wikipedia.
it defines a express route /search (GET)
expects q parameter as search term i.e( /search?q=alegebra )
it sends back an array of objects with this basic structure:

    Resource
    [
        {
            url: <string>,
            title: <string>,
            thumbnail: <string>
        }
    ]


