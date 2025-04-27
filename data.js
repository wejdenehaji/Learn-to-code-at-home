const programmingData = [
    {
      id: 'html-css',
      name: 'HTML & CSS',
      icon: '🌐',
      playlists: [
        {
          id: 'html-css-basics',
          title: 'HTML & CSS Crash Course',
          description: 'Learn the fundamentals of HTML and CSS to build and style websites from scratch.',
          thumbnail: 'photos/htmlcss.webp',
          url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G',
          level: 'Beginner',
          duration: '4 hours'
        },
        {
          id: 'css-flexbox-grid',
          title: 'CSS Flexbox & Grid Complete Guide',
          description: 'Master modern CSS layout techniques with Flexbox and Grid.',
          thumbnail: 'photos/maxt.png',
          url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY',
          level: 'Intermediate',
          duration: '3 hours'
        }
      ],
      videos: [
        {
          id: 'html-in-30',
          title: 'Learn HTML in 20 Minutes',
          description: 'Quick introduction to HTML for absolute beginners.',
          thumbnail:'photos/sddefault.jpg',
          url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
          duration: '20 min'
        },
        {
          id: 'css-in-20',
          title: 'CSS Crash Course in 20 Minutes',
          description: 'Learn the basics of CSS styling in just 20 minutes.',
          thumbnail: 'photos/csss.jpg',
          url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          duration: '20 min'
        },
        {
          id: 'responsive-design',
          title: 'Responsive Web Design Tutorial',
          description: 'Learn how to make your websites look good on all devices.',
          thumbnail: 'photos/responsive.jpg',
          url: 'https://www.youtube.com/watch?v=srvUrASNj0s',
          duration: '45 min'
        }
      ]
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '📜',
      playlists: [
        {
          id: 'js-fundamentals',
          title: 'JavaScript Fundamentals',
          description: 'A complete course covering JavaScript basics to advanced concepts.',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
          level: 'Beginner',
          duration: '8 hours'
        },
        {
          id: 'js-projects',
          title: '21 JavaScript Projects',
          description: 'Build 21 mini projects with vanilla JavaScript to practice your skills.',
          thumbnail: 'photos/JS-Projects.png',
          url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
          level: 'Intermediate',
          duration: '15 hours'
        }
      ],
      videos: [
        {
          id: 'js-crash',
          title: 'JavaScript Crash Course',
          description: 'Learn JavaScript fundamentals in one video tutorial.',
          thumbnail: 'photos/images.png',
          url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
          duration: '1 hr 40 min'
        },
        {
          id: 'js-dom',
          title: 'JavaScript DOM Manipulation',
          description: 'Learn how to interact with the Document Object Model using JavaScript.',
          thumbnail: 'photos/dommani.webp',
          url: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
          duration: '50 min'
        },
        {
          id: 'js-async',
          title: 'Async JavaScript - Promises & Async/Await',
          description: 'Master asynchronous programming in JavaScript.',
          thumbnail: 'photos/syncpng.png',
          url: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
          duration: '55 min'
        }
      ]
    },
    {
      id: 'react',
      name: 'React',
      icon: '⚛️',
      playlists: [
        {
          id: 'react-beginners',
          title: 'React for Beginners',
          description: 'Learn React from scratch and build modern web applications.',
          thumbnail: 'photos/unnamed.png',
          url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
          level: 'Beginner',
          duration: '10 hours'
        },
        {
          id: 'react-hooks',
          title: 'React Hooks Complete Guide',
          description: 'Master all React Hooks with practical examples.',
          thumbnail: 'photos/hook.png',
          url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A',
          level: 'Intermediate',
          duration: '6 hours'
        }
      ],
      videos: [
        {
          id: 'react-crash',
          title: 'React Crash Course',
          description: 'Learn the basics of React in one comprehensive video.',
          thumbnail: 'photos/react.webp',
          url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
          duration: '1 hr 48 min'
        },
        {
          id: 'react-router',
          title: 'React Router Tutorial',
          description: 'Learn how to implement routing in your React applications.',
          thumbnail: 'photos/routertutorialwebp.webp',
          url: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
          duration: '45 min'
        },
        {
          id: 'react-redux',
          title: 'Redux For Beginners',
          description: 'Learn state management in React with Redux.',
          thumbnail: 'photos/maxresdefault.jpg',
          url: 'https://www.youtube.com/watch?v=CVpUuw9XSjY',
          duration: '1 hr 30 min'
        }
      ]
    },
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      playlists: [
        {
          id: 'python-beginners',
          title: 'Python for Beginners',
          description: 'Complete Python tutorial for absolute beginners.',
          thumbnail: 'photos/python.webp',
          url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU',
          level: 'Beginner',
          duration: '12 hours'
        },
        {
          id: 'python-django',
          title: 'Django Web Development',
          description: 'Build web applications with Python and Django framework.',
          thumbnail: 'photos/django.webp',
          url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p',
          level: 'Intermediate',
          duration: '8 hours'
        }
      ],
      videos: [
        {
          id: 'python-crash',
          title: 'Python Crash Course',
          description: 'Learn Python basics in one video tutorial.',
          thumbnail: 'photos/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=JJmcL1N2KQs',
          duration: '1 hr 20 min'
        },
        {
          id: 'python-oop',
          title: 'Python OOP Tutorial',
          description: 'Learn object-oriented programming with Python.',
          thumbnail: 'photos/opp.jpg',
          url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM',
          duration: '1 hr'
        },
        {
          id: 'python-data',
          title: 'Data Analysis with Python',
          description: 'Learn how to analyze data using Python libraries.',
          thumbnail: 'photos/data.webp',
          url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
          duration: '2 hr 10 min'
        }
      ]
    },
    {
      id: 'node',
      name: 'Node.js',
      icon: '🟢',
      playlists: [
        {
          id: 'node-express',
          title: 'Node.js & Express From Scratch',
          description: 'Build web applications with Node.js and Express framework.',
          thumbnail: 'photos/note.jpg',
          url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp',
          level: 'Intermediate',
          duration: '7 hours'
        }
      ],
      videos: [
        {
          id: 'node-crash',
          title: 'Node.js Crash Course',
          description: 'Learn the basics of Node.js in one video.',
          thumbnail: 'photos/crash.jpg',
          url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
          duration: '1 hr 30 min'
        },
        {
          id: 'express-crash',
          title: 'Express.js Crash Course',
          description: 'Learn how to build web applications with Express.js.',
          thumbnail: 'photos/express.jpg',
          url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
          duration: '1 hr 15 min'
        }
      ]
    }
  ];