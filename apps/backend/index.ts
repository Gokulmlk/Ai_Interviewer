import express from "express";
import { PreInterviewRequest } from "./types";
import axios from "axios";

const app = express();

app.use(express.json());

app.post("/api/v1/pre-interview",  async(req, res) => {
  const {success, data, } = PreInterviewRequest.safeParse(req.body);

  if(!success){
    res.status(400).json({
      error: "Invalid request",
      message: "The request body is not valid",
    });
    return;
  }

  const githubUrl = data.github.endsWith("/") ? data.github.slice(0, -1) : data.github;

  const githubUsername = githubUrl.split("/").pop()!;

  const githubRepos = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);

  const repos = githubRepos.data.map((repo: any) => ({
    description: repo.description,
    name: repo.name,
    full_name: repo.full_name,
    starCount: repo.stargazers_count,
  }));


});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});