import React from "react";
import Navbar from "../../components/navbar";
import Discussions from "../../components/diskusi/discussions";
import FormComment from "../../components/diskusi/formcomment";
import Footer from "../../components/footer";
import ForumComment from "../../components/diskusi/forumcomment";

const DiscussionsPage = ({ match }) => {
    
    return (
        <div className="bg-[#F6F4EB]">
            <Navbar isDiscussionPage={true} /><br />
            <Discussions match={match} isDiscussionPage={true} />
            <FormComment /><br />
            <ForumComment match={match} isDiscussionPage={true}/><br />
            <Footer />
        </div>
    );
};

export default DiscussionsPage;