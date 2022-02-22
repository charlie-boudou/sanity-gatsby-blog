export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6214d044e3ab0fb1625a9e0d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e8kjrs5r",
                  apiId: "d24b70dd-f2d0-440d-8f28-5a82e74b3096",
                },
                {
                  buildHookId: "6214d04521426c8dee6d12ab",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3mn773yr",
                  apiId: "a253f2d2-f229-4519-85e6-51db03eb009d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/charlie-boudou/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3mn773yr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
