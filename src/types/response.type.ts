

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
    id: string,
}

export type CommentResponse = {
    id: string,
    comment_by: string,
    comment: string,
    created_at: string,
    updated_at: string,
    talent: string
}

export type FeedbackResponse = {
    id: string,
    comment: string,
    result: "pass" | "fail",
    created_at: Date,
    updated_at: Date,
    talent: string
}