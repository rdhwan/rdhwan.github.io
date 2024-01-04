import { ReactNode } from "react";

type Works = {
  slug: string;
  title: string;
  content: ReactNode;
  short: string;
  images: string[];
};

const anakPipa: Works = {
  slug: "anak-pipa",
  title: "AnakPipa Sinergi Pratama - Website",
  images: [
    "/assets/works/ap/ap_landing_page.png",
    "/assets/works/ap/ap_products.png",
    "/assets/works/ap/ap_detail_produk.png",
    "/assets/works/ap/ap_about_us.png",
    "/assets/works/ap/ap_contact_us.png",
  ],
  short:
    "A website for AnakPipa Sinergi Pratama, a company that sells pipes and fittings.",
  content: (
    <div className={"flex flex-col gap-4 text-justify"}>
      <p>
        I take pride in presenting the AnakPipa Sinergi Pratama website, a
        project born out of my dedication to enhancing my father's company's
        online presence. Crafted with care, this website serves as a dynamic
        showcase for the diverse range of products offered by the company.
        Designed to be fully responsive, it ensures a seamless user experience
        across all devices, guaranteeing that the content looks appealing even
        on smaller screens. The website stands as a testament to my commitment
        to efficiency and speed in web development. Leveraging Vite for the
        frontend and Express.js for the backend, I approached the full-stack
        development with a focus on minimizing efforts while maximizing
        performance, resulting in a fast and user-friendly website.
      </p>

      <p>
        This project not only showcases the products of AnakPipa Sinergi Pratama
        but also reflects my passion for creating robust and responsive web
        solutions that leave a lasting impact. The combination of React (im
        using VITE btw) and Express.js as the backend allows for a smooth and
        efficient development process, emphasizing the importance of a
        fast-loading website in today's digital landscape. I am excited about
        the potential this website holds in enhancing the online presence of the
        company and providing users with a compelling and accessible platform to
        explore the diverse offerings of AnakPipa Sinergi Pratama.
      </p>
    </div>
  ),
};

const tk: Works = {
  slug: "tk",
  title: "Teknik Komputer UMN - Website",
  images: [
    "/assets/works/tk/tk_landing_page.png",
    "/assets/works/tk/tk_alumni_corner.png",
    "/assets/works/tk/tk_detail_page.png",
    "/assets/works/tk/tk_cms_content_editor.png",
    "/assets/works/tk/tk_cms_dashboard.png",
    "/assets/works/tk/tk_cms_dashboard_edit.png",
    "/assets/works/tk/tk_cms_login.png",
  ],
  short: "A website for Teknik Komputer UMN, my major in college.",
  content: (
    <div className={"flex flex-col gap-4 text-justify"}>
      <p>
        Leading the Teknik Komputer UMN website project was a big deal for me,
        especially since it was the most significant project I led in 2023. As a
        Computer Engineering Major, this project allowed me to dive deep into
        various aspects, from frontend to backend and deployment. We chose
        Chakra UI to design the user interface, aiming for a smooth and engaging
        experience. The design team was fantastic, and together, we added tons
        of animations to make the website not just functional but also
        captivating for visitors.
      </p>

      <p>
        Performance and user-friendliness were our top priorities. We wanted the
        website not only to look good but also to be easily editable, especially
        for some of my lecturers who would update the content. That's right; we
        built a Content Management System (CMS) to simplify content updates and
        maintenance. This approach ensured that the website could evolve without
        much hassle, meeting the needs of both visitors and content
        contributors.
      </p>

      <p>
        Now, let me tell you about the icing on the cake! One of our team
        members, Gian, came up with a brilliant idea: a cinematic video
        showcasing our campus. We were all blown away by it! After some
        brainstorming, we decided to feature this cinematic masterpiece on the
        landing page, right before the main content. Trust me; it elevated the
        website's look and feel, giving it a world-class touch. It was one of
        those moments where everything just clicked, making our hard work shine
        even brighter.
      </p>

      <p>
        All in all, leading the Teknik Komputer UMN website project was an
        enriching experience. From coordinating with the design team to
        implementing advanced features and integrating a cinematic video, every
        step was a learning opportunity. This project not only showcased my
        skills as a leader and developer but also highlighted the collaborative
        spirit of our team, making it a memorable journey.
      </p>
    </div>
  ),
};

const mxm23: Works = {
  slug: "mxm23",
  title: "MAXIMA UMN 2023 - Website",
  images: [
    "/assets/works/mxm23/client_landing_page.png",
    "/assets/works/mxm23/client_home.png",
    "/assets/works/mxm23/client_about_us.png",
    "/assets/works/mxm23/client_login.png",
    "/assets/works/mxm23/client_register.png",
    "/assets/works/mxm23/client_state.png",
    "/assets/works/mxm23/client_state_lampu.png",
    "/assets/works/mxm23/client_state_selection.png",
    "/assets/works/mxm23/client_malpun_tiket.png",
    "/assets/works/mxm23/client_malpun_tiket_claimed.png",
    "/assets/works/mxm23/client_user_profile.png",
    "/assets/works/mxm23/internal_dashboard.png",
    "/assets/works/mxm23/internal_daftar_state.png",
    "/assets/works/mxm23/internal_register.png",
    "/assets/works/mxm23/internal_login.png",
    "/assets/works/mxm23/internal_detail_peserta.png",
    "/assets/works/mxm23/internal_edit_state.png",
    "/assets/works/mxm23/internal_panitia_divisi.png",
    "/assets/works/mxm23/internal_qr_scanner.png",
  ],
  short: "A website for MAXIMA UMN 2023, an event for new students in UMN.",
  content: (
    <div className={"flex flex-col gap-4 text-justify"}>
      <p>
        Being a part of the front-end team for MAXIMA UMN 2023 was an awesome
        experience. Our mission was to introduce new students to the
        non-academic side of UMN, and we wanted a website as vibrant and
        fast-paced as the event itself. We opted for Next.js, which made our
        website not just fast but also gave us a smooth development experience.
        For the user interface magic, we turned to Chakra UI, making sure the
        site looks sleek and feels user-friendly.
      </p>

      <p>
        But hey, it wasn't just about the front end for me! I occasionally
        jumped into the backend action using Express.js. Why? Well, we needed to
        make sure our website could handle the massive traffic during the final
        event, MALAM PUNCAK. Imagine all the new students checking out the
        website at the same time! We set up a load balancer to scale
        horizontally and keep everything running smoothly.
      </p>

      <p>
        Being a part of the MAXIMA UMN 2023 project brought me immense joy,
        especially when the coordinator accepted and successfully implemented my
        QR Scanner-based presence system. It was a moment of gratitude and
        excitement for me. As MALAM PUNCAK kicked off, there was a bit of
        nervousness, fearing any potential bugs in my system. However, to my
        delight, everything worked like a charm. I felt a sense of pride not
        just in my individual achievement but also in the incredible support
        from the entire website team. It was a collaborative effort that made
        the entire project, including the QR system, a success. I am genuinely
        proud of what we accomplished together.
      </p>

      <p>
        Oh, and the deployment hustle! I played a part in that too. From
        creating deployment workflows to setting up the Plesk server, and
        deploying the backend to multiple instances on DigitalOcean - yeah, I
        wore the sysadmin hat too! Being involved in the whole process, from
        coding the front end to keeping the servers running, made MAXIMA UMN
        2023 a project close to my heart.
      </p>
    </div>
  ),
};

const works: Works[] = [tk, mxm23, anakPipa];
export default works;
