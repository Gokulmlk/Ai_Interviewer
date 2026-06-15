import express from "express";
import { PreInterviewRequest } from "./types";
import { scrapeGithub } from "./scrapers/github";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors())

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
  const repos = await scrapeGithub(githubUsername);

  res.json({
    github:repos,
  });

});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});