export const config = {
  dev: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "postgres",
    aws_region: "us-east-2",
    aws_profile: "default",
    // "aws_media_bucket": "udagram-ruttner-dev"
    aws_media_bucket: "my-tunmbi-bucket",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
