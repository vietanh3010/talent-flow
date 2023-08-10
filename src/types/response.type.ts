

export type ProfileResponse = {
    name: string,
    city: string,
    tf_summary: string,
    objective: string,
    phone: string,
    email: string,
    skill_details: Array<{
        name: string,
        exp: number,
    }>,
    total_experience_in_year: string,
    url: string,
}