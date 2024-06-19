import React from 'react'
import TeamMember from '../components/TeamMember'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'





const memberDetails=[
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },
  
    {name:'Member',
    branch:'Computer Science',
    descriptiom:'CSE 26 NIT Patna || C,C++,Python, Javascript ||Data Structure and Algorithm || Web Developer ||Google Cloud || Azure || Machine Learning enthusiast|| Gen AI',
    image:'https://media.licdn.com/dms/image/D4D03AQFqf1mbOSQL4A/profile-displayphoto-shrink_400_400/0/1718304620355?e=1724284800&v=beta&t=4Z8lawzcqtIUhVO4YSZ7MfNLDAJvdxBT5Z9jch4Ph3Y',

    linkedin:'https://www.linkedin.com/in/piyushkumarprasad/'

    },

   
    
]

const Teams = () => {
    useEffect(() => {
    
        Aos.init({duration:1000});
      
        }
      , [])
     
  return (
    <div className=' mt-[100px] bg-gray-900 min-h-screen w-full py-10 px-3'> 

    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Office Bearers </h1>
           
           <div className=' bg-gray-900 min-h-screen   py-4 flex flex-wrap justify-center' >
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                linkedin={member.linkedin}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Web Team </h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                linkedin={member.linkedin}
                />
            ))
        }

    </div>

           

    </div>

    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Android Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                />
            ))
        }

    </div>

    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Technical Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                linkedin={member.linkedin}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>PR Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Content and Media Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Outreach Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            memberDetails.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.image}
                description={member.descriptiom}
                />
            ))
        }

    </div>

           

    </div>

           

    </div>
    

    </div>


  )


   
}

export default Teams