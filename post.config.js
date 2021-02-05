const BASEURL =
  process.env.BASE_URL_PRODUCTION === ''
    ? process.env.BASE_URL_PRODUCTION
    : '/behind-our-masks'
const CAN_URL =
  process.env.BASE_URL_PRODUCTION === ''
    ? `https://behindourmasks.net`
    : `https://youthradio.github.io${BASEURL}`
module.exports = {
  baseURL: BASEURL,
  title:
    'Behind Our Masks - Uncovering pandemic life for California’s young adults',
  author: 'Static Author',
  publishDate: 'April. 14, 2020',
  location: 'Oakland, CA',
  description:
    'We are young Californians. COVID has taken over our lives, and life choices. Behind our masks, our families changed; our paths changed; our futures changed. These are our stories of a year of struggle and finding our way forward. A project of YR Media in Oakland, The kNOw in Fresno, Boyle Heights Beat in Los Angeles, and Coachella Unincorporated in the Eastern Coachella Valley.',
  url: CAN_URL,
  featureImage: `${CAN_URL}/images/BOM-new-meta-img.jpg`,
  featureImagePath: 'images/feature',
  featureImageDescription:
    'We are young Californians. COVID has taken over our lives, and life choices. Behind our masks, our families changed; our paths changed; our futures changed. These are our stories of a year of struggle and finding our way forward. A project of YR Media in Oakland, The kNOw in Fresno, Boyle Heights Beat in Los Angeles, and Coachella Unincorporated in the Eastern Coachella Valley.',
  featureImageCaption:
    'We are young Californians. COVID has taken over our lives, and life choices. Behind our masks, our families changed; our paths changed; our futures changed. These are our stories of a year of struggle and finding our way forward. A project of YR Media in Oakland, The kNOw in Fresno, Boyle Heights Beat in Los Angeles, and Coachella Unincorporated in the Eastern Coachella Valley.',
  wpPostSlug:
    'Black-Mirror-What-Artificial-Intelligence-Means-for-Race-Art-and-the-Apocalypse',
  wpPostID: '60986',
  // you might not need to change
  fbAppID: '73080818131',
  twitterHandler: '@itsyrmedia',
  POLLSERVER: 'https://ee51aej7u4.execute-api.us-west-2.amazonaws.com/latest',
  docs: [
    {
      name: 'Main about quotes',
      id: '1RKLRozZ88INOjwUcF_qNyZzUf-c-xkaKCGWykJ9b2VQ',
    },
    {
      name: 'Eduardo video',
      id: '16Ze5Yth7R5tITwqTRPEXVsPLlDORGHQXxBZP7pcopyE',
    },
    {
      name: 'Pandemic Took Young People’s Jobs, And Maybe Their Lifespans Too',
      id: '17v27fl8zsQ2XIbkEhIS-_8iOAHIxDBz9oOo3lYrbIsc',
    },
    {
      name: 'Profile of essetial workers',
      id: '1E-pwBDTTAJndMzwmNIpXQx84XhkLnXhtjtFGb1F-rr0',
    },
    {
      name: 'No Easy Choices: Stay in School or Pay the Rent?',
      id: '1BxDW9Cxh4E3hadmwtteLZvwjiCd0Bqmzk0GRwPTD2nY',
    },
  ],
  dataPath: 'data/data.json',
  newsletter: {
    uid: '962a6c84da5c12bc5b3486086',
    id: '6c6dda9845',
    url: 'https://media.us4.list-manage.com/subscribe/post-json',
  },
}
