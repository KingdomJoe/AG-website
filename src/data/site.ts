export const SITE = {
  name: 'Faith Chapel AG',
  branch: 'McCarthy Hill',
  fullName: 'Faith Chapel AG, McCarthy Hill',
  parent: 'Assemblies of God, Ghana',
  tagline: 'Raising Disciples for Heavenly Glory',
  vision:
    'To cultivate a church of passionate believers, committed to spreading the love of Christ.',
  theme: {
    title: 'Faith of the Fathers',
    year: '2026',
    scripture: 'Hebrews 11:1–2',
    verse:
      'Now faith is confidence in what we hope for and assurance about what we do not see. This is what the ancients were commended for.',
  },
  address: 'McCarthy Hill, Off the Mallam–Kasoa Highway, Accra, Ghana',
  phone: '+233 (0) 24 000 0000',
  email: 'hello@faithchapelag.org',
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    x: '#',
  },
  external: {
    agGhana: 'https://www.agghana.org',
    giving: 'https://giving.agghana.org',
    locations: 'https://www.agghana.org/locations',
    agtv: 'https://www.agghana.org',
  },
}

export type NavChild = { label: string; href: string; description?: string }
export type NavItem = { label: string; href?: string; children?: NavChild[] }

/* Mirrors the Assemblies of God, Ghana primary navigation:
   About · Agencies · Departments · Missions · Associations · Resources */
export const NAV: NavItem[] = [
  {
    label: 'About',
    children: [
      { label: 'Who We Are', href: '#about', description: 'Our story at McCarthy Hill' },
      { label: 'Vision & Mission', href: '#vision', description: 'What drives us' },
      { label: 'Leadership', href: '#leadership', description: 'Pastors & church board' },
      { label: 'Statement of Faith', href: '#resources', description: '16 Fundamental Truths' },
      { label: 'Service Times', href: '#services', description: 'Plan your visit' },
    ],
  },
  {
    label: 'Agencies',
    children: [
      { label: 'AG Care Ghana', href: 'https://agcare-ghana.org', description: 'Relief & development' },
      { label: 'AGTV', href: '#', description: 'Television & media' },
      { label: 'AG Theological Seminary (AGTS)', href: '#', description: 'Ministerial training' },
      { label: 'AG Bookshops', href: 'https://agbookshops.com', description: 'Literature & resources' },
      { label: 'AG Hospitals & Clinics', href: '#', description: 'Health services' },
      { label: 'AG Credit Union', href: '#', description: 'Financial cooperative' },
    ],
  },
  {
    label: 'Departments',
    children: [
      { label: "Men's Ministry", href: '#ministries', description: 'Building godly men' },
      { label: "Women's Ministry", href: '#ministries', description: 'Women of purpose' },
      { label: 'Youth Ministry', href: '#ministries', description: 'The next generation' },
      { label: "Children's Ministry", href: '#ministries', description: 'Sunday School & Kids' },
      { label: 'Royal Rangers', href: '#ministries', description: 'Boys & young men' },
      { label: 'Missionettes', href: '#ministries', description: 'Girls & young women' },
      { label: 'Music & Creative Arts', href: '#ministries', description: 'Worship & media' },
      { label: 'Christian Education', href: '#ministries', description: 'Discipleship classes' },
    ],
  },
  { label: 'Missions', href: '#missions' },
  {
    label: 'Associations',
    children: [
      { label: 'AG Professionals Network', href: 'https://www.agprofnetwork.com', description: 'AGPN' },
      { label: "Ministers' Wives Association", href: '#', description: 'MWA' },
      { label: 'AG Chaplaincy', href: '#', description: 'Institutional chaplains' },
      { label: 'AG Teachers Fellowship', href: '#', description: 'Educators in AG' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Sermons & Messages', href: '#resources', description: 'Watch & listen' },
      { label: 'News & Events', href: '#news', description: 'What is happening' },
      { label: 'Verse of the Day', href: '#verse', description: 'Daily scripture' },
      { label: 'Constitution & Bylaws', href: '#resources', description: 'AG Ghana governance' },
      { label: 'Forms & Downloads', href: '#resources', description: 'Documents' },
      { label: 'Gallery', href: '#resources', description: 'Photos & videos' },
    ],
  },
]

export const SERVICES = [
  { day: 'Sunday', name: 'Celebration Service', time: '8:00 AM – 11:00 AM', note: 'Main worship service · Children’s church runs alongside' },
  { day: 'Sunday', name: 'Sunday School', time: '7:00 AM – 7:50 AM', note: 'Classes for all ages' },
  { day: 'Tuesday', name: 'Bible Study', time: '6:30 PM – 8:00 PM', note: 'Systematic study of the Word' },
  { day: 'Friday', name: 'Prayer & Deliverance', time: '6:30 PM – 8:30 PM', note: 'Corporate intercession' },
]

export const MINISTRIES = [
  { name: "Men's Ministry", short: 'Men', blurb: 'Raising men of integrity who lead their homes, workplaces and communities in Christ.', icon: 'Users' },
  { name: "Women's Ministry", short: 'Women', blurb: 'A sisterhood of faith — JOY Fellowship, Y’s and Missionettes nurturing women of purpose.', icon: 'Flower2' },
  { name: 'Youth Ministry', short: 'Youth', blurb: 'Empowering young people to live boldly for Jesus through discipleship, worship and service.', icon: 'Flame' },
  { name: "Children's Ministry", short: 'Kids', blurb: 'Sunday School and children’s church where the next generation meets Jesus early.', icon: 'Baby' },
  { name: 'Royal Rangers', short: 'Rangers', blurb: 'Mentoring boys and young men through adventure, scripture and servant leadership.', icon: 'Compass' },
  { name: 'Music & Creative Arts', short: 'Worship', blurb: 'Choir, worship team, media and drama — leading the church into God’s presence.', icon: 'Music2' },
  { name: 'Christian Education', short: 'Discipleship', blurb: 'New believers’ classes, membership, and leadership training that forms disciples.', icon: 'BookOpen' },
  { name: 'Missions & Outreach', short: 'Missions', blurb: 'Local evangelism, community care and support for AG foreign missionaries.', icon: 'Globe2' },
]

export const EVENTS = [
  { date: '2026-10-11', tag: 'Annual Theme', title: 'Faith of the Fathers — Teaching Series Launch', summary: 'A six-week journey through Hebrews 11, rediscovering the faith that sustained our fathers.', image: '/images/faith-of-the-fathers.jpg' },
  { date: '2026-10-18', tag: 'Outreach', title: 'McCarthy Hill Community Medical Outreach', summary: 'Free health screening and school supplies for families around Mallam and Gbawe.', image: '/images/outreach.jpg' },
  { date: '2026-10-25', tag: 'Youth', title: 'Youth Alive Encounter Night', summary: 'An evening of worship, the Word and fellowship for young adults and students.', image: '/images/youth.jpg' },
]

export const VERSES = [
  { ref: 'Hebrews 11:1', text: 'Now faith is confidence in what we hope for and assurance about what we do not see.' },
  { ref: 'James 5:16', text: 'The prayer of a righteous person is powerful and effective.' },
  { ref: 'Matthew 28:19', text: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.' },
  { ref: 'Proverbs 3:5–6', text: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
  { ref: 'Isaiah 40:31', text: 'But those who hope in the LORD will renew their strength. They will soar on wings like eagles.' },
  { ref: 'Joshua 1:9', text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.' },
  { ref: 'Philippians 4:13', text: 'I can do all this through him who gives me strength.' },
]

export const FUNDAMENTALS = [
  'The Scriptures Inspired', 'The One True God', 'The Deity of the Lord Jesus Christ', 'The Fall of Man',
  'The Salvation of Man', 'The Ordinances of the Church', 'The Baptism in the Holy Spirit', 'The Initial Physical Evidence',
  'Sanctification', 'The Church and Its Mission', 'The Ministry', 'Divine Healing',
  'The Blessed Hope', 'The Millennial Reign of Christ', 'The Final Judgment', 'The New Heavens and the New Earth',
]
