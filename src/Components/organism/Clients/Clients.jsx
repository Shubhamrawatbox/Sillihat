import React from 'react'
import Heading from '../../atom/heading/Heading'
import ClientPhoto from '../../molecule/clientsphoto/ClientPhoto'
import './Client.scss';

const Clients = () => {
    return (
        <section className="client">
            <Heading prop="Our Clients" Headsizes="head-medium"/>
            <ClientPhoto/>
        </section>
    )
}

export default Clients
