export interface JobsResponse {
    "0-legal-notice": string;
    "job-count":      number;
    jobs:             Job[];
}

export interface Job {
    id:                          number;
    url:                         string;
    title:                       string;
    company_name:                string;
    company_logo:                string;
    category:                    string;
    tags:                        string[];
    job_type:                    string;
    publication_date:            Date;
    candidate_required_location: string;
    salary:                      string;
    description:                 string;
    company_logo_url:            string;
}