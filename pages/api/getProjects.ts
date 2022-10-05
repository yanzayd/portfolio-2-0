 import type { NextApiRequest, NextApiResponse } from "next";
 import { groq } from 'next-sanity'
 import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

 //create a groq query
 const query = groq`
 *[_type == 'projects']{
  ...,  
  technologies[]->
 }
 
 `
 type Data = {
    projects: Project[]
 }

 // create a type definition
 export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projects: Project[] = await sanityClient.fetch(query)

    res.status(200).json({ projects })
  }