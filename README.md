# Frontend deployment on Object store and CDN (Cloud Delivery Network)

- Build your project 
  ```sh
  npm run build
  ```
- To serve file locally instead of using `npm run dev`, install `serve` and `cd` into `dist`folder and run `serve` command
  - To install:
    ```sh
    npm i -g serve
    ```
  - To serve
    ```sh
    cd dist
    serve
    ```
- At this point you have basic HTML/CSS/JS code that you can deploy on the internet. You might be tempted to host this on an EC2 instance, Like we did in [backend-server-cloud](https://github.com/princebansal7/backend-server-cloud) 
- But that's not the right approach, instead use CDN


## Object store & CDN (Content Delivery Network)

- As the name suggests, it’s an optimal way for you to deliver content (mp4 files, jpg and even HTML/CSS/JS files) to your users.
- It is better than serving it from a VM/EC2 instances because of a few reasons
  - EC2 machine server runs only at one region, hence user will have to send request far again & again
- **CDN** have multiple POP (point of presence) all over world and they caches the data so particular region users access that cached data 
- For frontend, mp4 files, images, Object stores  + CDNs are a better approach.
- **Object stores** like `S3 (Simple storage service)`  let's you store objects and provides their access link, and we can use this link in CDN like CloudFront we distribute over the internet.
- You might be tempted to open your S3 bucket at this point and access the content directly, but don’t
- Your S3 bucket should be blocked by default, and you should allow cloudfront (CDN) to access it.
- CloudFront lets you add sub-domain, certificates etc
- Great video on how HotStar scales their infrastructure during cricket matches (they use CDNs heavily) | [Link](https://www.youtube.com/watch?v=9b7HNzBB3OQ)
- NOTE:
  - You can’t use the same for backends, since every request returns a different response. Caching doesn’t make any sense there.
  - You can use edge networks for backends (deploy your backend on various servers on the internet) but data can’t be cached in there.