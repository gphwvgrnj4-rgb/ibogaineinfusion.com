import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/what-is-iv-ibogaine-infusion",
        destination: "/what-is-ibogaine-infusion",
        permanent: true,
      },
      {
        source: "/what-is-iv-ibogaine-infusion/",
        destination: "/what-is-ibogaine-infusion",
        permanent: true,
      },
      {
        source: "/ibogaine-safety-cardiac-screening",
        destination: "/safety-and-screening",
        permanent: true,
      },
      {
        source: "/ibogaine-safety-cardiac-screening/",
        destination: "/safety-and-screening",
        permanent: true,
      },
      {
        source: "/ibogaine-infusion-cost",
        destination: "/blog/cost-of-ibogaine-treatment",
        permanent: true,
      },
      {
        source: "/ibogaine-infusion-cost/",
        destination: "/blog/cost-of-ibogaine-treatment",
        permanent: true,
      },
      {
        source: "/ibogaine-vs-ketamine",
        destination: "/blog/ibogaine-vs-ketamine-for-addiction",
        permanent: true,
      },
      {
        source: "/ibogaine-vs-ketamine/",
        destination: "/blog/ibogaine-vs-ketamine-for-addiction",
        permanent: true,
      },
      {
        source: "/ibogaine-vs-ayahuasca",
        destination: "/blog/ibogaine-vs-ayahuasca",
        permanent: true,
      },
      {
        source: "/ibogaine-vs-ayahuasca/",
        destination: "/blog/ibogaine-vs-ayahuasca",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
