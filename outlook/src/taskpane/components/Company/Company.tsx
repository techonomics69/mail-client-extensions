import * as React from "react";
import "./Company.css";
import {ProfileCard, ProfileCardProps} from "../ProfileCard/ProfileCard";
import CompanyInsights from './CompanyInsights';
import CompanyContact from './CompanyContact';
import AppContext from '../AppContext';

type CompanyProps = {
};
type CompanyState = {
};

class Company extends React.Component<CompanyProps, CompanyState> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {company} = this.context.partner;
        const profileCardData: ProfileCardProps = {
            domain: company.getDomain(),
            name: company.getName(),
            initials: company.getInitials(),
            icon: company.getLogoURL(),
            job: undefined,
            phone: undefined,
            twitter: company.getTwitter(),
            facebook: company.getFacebook(),
            crunchbase: company.getCrunchbase(),
            linkedin: company.getLinkedin(),
            description: company.getDescription()
        }

        return (
            <div>
            <div className='tile-title-space'>
                <div className='tile-title'>COMPANY INSIGHTS</div>
            </div>
            <ProfileCard {...profileCardData}/>
            <CompanyContact />
            <CompanyInsights />
            </div>
        );
    }
}

Company.contextType = AppContext;
export default Company;