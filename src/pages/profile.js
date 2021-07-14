import React from 'react';
import { Link } from 'react-router';
import Layout from '@theme/Layout';
import { SocialIcon } from 'react-social-icons';
import photo from './profile/ProfilePhoto.jpg';
import './all.scss'


function Profile() {
    return (
        <Layout title="關於我">
            <div
                className="d-flex container profile"
                style={{
                    width: '80%',
                    maxWidth: '1000px',
                    margin: '30px auto',
                }}
            >
                <div style={{ margin: '20px auto' }}>
                    <div
                     className="textCenter"                    
                     >
                        <img
                            src={photo}
                            alt="myPhoto"
                            style={{
                                maxHeight: "100px",
                                maxWidth: "100px",
                                borderRadius: '50%',
                            }}
                        />
                        <h1>笑笑Emi</h1>
                    </div>
                    <div className="d-flex justify-content-sm-center mb-4">
                        <div className="mx-2">
                            <SocialIcon
                                url="https://github.com/bell881122"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                bgColor="#ffffff" />
                        </div>
                        <div className="mx-2">
                            <SocialIcon
                                url="https://www.facebook.com/profile.php?id=100001187812669"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                bgColor="#ffffff" />
                        </div>
                        <div className="mx-2">
                            <SocialIcon
                                url="https://www.instagram.com/bell881122/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                bgColor="#ffffff" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>JS {"&"} F2E</h3>
                            <ul>
                                <li>Node</li>
                                <li>Webpack</li>
                                <li>React</li>
                                <li>Vue</li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h3>B2E</h3>
                            <ul>
                                <li>Firebase</li>
                                <li>C#(.Net)</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h3>Other</h3>
                            <ul>
                                <li>GCP</li>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}

export default Profile;