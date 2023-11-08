import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Contacts, Projects, Experience } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Experience/>
            <Education />
            <Skills />

            <Projects />
            {/* <Achievement /> */}

            <Blog />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
