import './index.css';
import OAuthButton from '../../components/OAuthButtons';

export default function LandingPage() {
    return (
        <div className="lf_main_container">
            <div className="lf_main_header">
                <div className="lf_main_header_content">
                    Lecture Forager
                </div>
            </div>
            <div className="lf_main_description">
                Optimizing mindless scouring through college lectures
            </div>
            <div className="lf_oauth_container">
                <div className="lf_github_signup">
                    <OAuthButton title='Signup' />
                </div>
                <div className="lf_github_login">
                    <OAuthButton title='Login' />
                </div>
            </div>
        </div>
    )
}


