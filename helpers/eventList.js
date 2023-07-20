/**
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} title - Event title.
 * @property {string} date - Event date.
 * @property {string} content - Event content.
 * @property {string} image - Event image.
 * @property {string} link - Event link.
 */

/**
 * @typedef EventList
 * @type {object}
 * @property {PropertiesHash[]} TravancoreHubEvents - List of events conducted by Travancore Hub.
 */

/**
 * @type {EventList}
 * @description List of events
 * @example
 * const eventList = require('./helpers/eventList');
 * console.log(eventList.TravancoreHubEvents);
 */
const eventList = {
    TravancoreHubEvents:[
        {
            title: '#1Day.com',
            date: '2022-02-09',
            content: `#1Day.com was a movie rescripting competition conducted by IEEE Travancore Hub as a
            part of World Movie Day. The event aimed at testing the writing and the imagination
            skills of the participants.`,
            image: '/assets/images/events/travancore/1daycom.jpeg',
            link:"/events/travancore/1day"
        },
        {
            title: 'Branch Counselors and Chapter Advisors Meet 2022',
            date: '2022-02-12',
            content: `The Travancore Hub Branch Counselors and Chapter Advisors Meet was conducted on 12th
            February, 2022 from 3:00 - 05:00 PM via Zoom Cloud Meeting. The meetup aims at
            bringing together all the counselors and advisors under the hub and providing them
            with a platform to share ideas and events being carried out in their respective
            institutes.`,
            image: '/assets/images/events/travancore/bcc1.jpeg',
            link:"/events/travancore/BCC"
        },
        {
            title: 'Mystifier',
            date: '2022-02-12',
            content: `On behalf of International women’s Day, IEEE WIE travancore hub in association with
            WIE Kerala AG conducted a crossword puzzle competition on the topic Women in
            Technology on 7th March 2022.`,
            image: '/assets/images/events/travancore/mystifier.jpeg',
            link: '/events/travancore/mystifier',
        },
        {
            title: 'Branch Counselors and Chapter Advisors Meet 2023',
            date: '2023-03-08',
            content: ' Branch Counselors and Chapter Advisors Congress 2023, a networking platform for the Branch Counselors and Advisors. Besides providing a platform for networking, the event also embodies plans proposed by the SAC for the upcoming year, Membership Development Sessions, Guideline Sessions and many more.',
            image: '/assets/images/events/travancore/bcc23.jpg',
        },
        {
            title: 'SALT- Student branch Awareness and Leadership Training',
            date: '2023-04-10',
            content: `SALT involves 
            ⭕One-to-one mentoring session for office bearers.
            ⭕ Doubt clearance sessions on obscurities related to funding opportunities, OU analytics, Chapter grants, MD resources and furthermore.
            
            Student Branches are open to raise the concerns they have with the team.
            `,
            image: '/assets/images/events/travancore/salt.jpg',
        },
        {
            title: 'KICKSTART',
            date: '2023-04-29',
            content: `             
            LinkedIn and Resume, being an integral part of our careers, help to bring the impact we wish to portray ourselves as professionals before the recruiters. 
            
            Hence, to master the art of Resume building and LinkedIn optimization, 
            Ms. Sona Upadhyaya, a certified resume writer and career coach, is directing KICKSTART, a virtual event to delineate the ins and outs of an exemplary Resume and LinkedIn profile. 
            `,
            image: '/assets/images/events/travancore/Kickstart.jpg',
        },
        {
            title: 'Enthalpy (SSBR)',
            date: '2023-05-20',
            content: `             
            ENTHALPY, a Membership Development Session converging all Student Branches to seek new members.
            `,
            image: '/assets/images/events/travancore/enthalpy.jpg',
            link:"https://enthalpy.ieee-link.org/"
        },
        {
            title: 'Travancore Hub Connect',
            date: '2023-06-15',
            content: ` IEEE Travancore Hub is thrilled to embark on it's collaborative journey, Travancore Hub Connect- Come let's connect, collaborate and grow! IEEE Travancore Hub is looking forward for Student Branch Collaborations under Travancore Hub. We are excited to embrace ideas and top-notch entries will be scrutinized.💫`,
            image: '/assets/images/events/travancore/THC23.jpg',
        },
        {
            title: 'CogCraft',
            date: '2023-06-25',
            content: `             
            Do you ever find yourself wishing you had a coding wizard by your side 🤔? Well, here's your chance to unleash the potential of AI. The best part🫨?...You don't need to be a coding expert to participate. Basic coding knowledge is all you need 🤩! IEEE Travancore Hub in collaboration with IEEE WiE Kerala Section brings you a fun challenge - CogCraft ✨. Instead of focusing on coding prowess, we're putting the spotlight on your ability to prompt the AI effectively. Your task is to craft precise prompts that coax the AI into generating code 🤖✨.
            `,
            image: '/assets/images/events/travancore/cogcraft.jpg',
        },
    ]
};

module.exports = eventList;