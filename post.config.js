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
    {
      name: 'Stuck in the Digital Divide',
      id: '1xwn1hf7v4cj5djPwi7hpovw93l5OQbeS6LUa-0Pm2mM',
    },
    {
      name: 'Organizing From Home: Pandemic Forces Activists to Adjust    ',
      id: '1CvbJvjCK6d7JTZdFoz7XSBTwy9eCgtiT0Qo0UXVIe0Y',
    },
    {
      name:
        "'Everything's Just Up in the Air' Pandemic Stalls Football Season and Dreams",
      id: '1mZmFYMYixrF8wY0a382d4iJ8eAFV8tT4lOdFkNs7Jww',
    },
    {
      id: '1FO4qXExKMNFHCgzyr_AyJj4U9TTtH2TIocPPsbyswEo',
    },
    {
      id: '1jbNyPy4wxB3Wz6Ay31WyTdXhoSwKfGfdLIsAT5j496s',
    },
    { id: '1JxfH9YfkT6LRYXt7LlEcC7gj4epu6srxVILMBh19q8g' },
    { id: '15-F4gqQWg1ls7d9zqTrxtZB5nM93ocoR5D_eFohlxxE' },
  ],
  dataPath: 'data/data.json',
  newsletter: {
    uid: '962a6c84da5c12bc5b3486086',
    id: '6c6dda9845',
    url: 'https://media.us4.list-manage.com/subscribe/post-json',
  },
}
