export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62267cceb464170a8743c4ff',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o95y86v9',
                  apiId: '65422286-eee4-4f9c-a8b5-644991353561'
                },
                {
                  buildHookId: '62267cce45b4310e702f1518',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uhejju5c',
                  apiId: '9d15971f-6143-4281-8e79-80e2dc3033ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckpd/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uhejju5c.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
