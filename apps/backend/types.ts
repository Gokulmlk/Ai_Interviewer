import zod from "zod";

export const PreInterviewRequest = zod.object({
    github: zod.string(),
    linkedin: zod.string(),
})