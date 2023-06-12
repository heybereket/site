import { Project } from "@/components/Project";

export default function Home() {
  const DOB = new Date("09/10/2008");
  const monthDiff = Date.now() - DOB.getTime();
  const ageDT = new Date(monthDiff);
  const year = ageDT.getUTCFullYear();
  const age = Math.abs(year - 1970);

  return (
    <div className="pl-16 pr-16 py-16 md:pl-32 md:pr-32 md:py-32 max-w-screen-3xl">
      <h1 className="text-lightGray text-3xl md:text-6xl">
        👋 Hi. I&apos;m Bereket, a {age} year old developer based in 🇨🇦{" "}
        <span className="text-white">Toronto, Canada</span> with a love for{" "}
        <span className="text-white">software</span>.
      </h1>

      <h1 className="mt-16 text-2xl font-bold text-white">Organizations</h1>

      <div className="flex flex-col md:grid md:grid-cols-3 mt-8 gap-y-10">
        <Project
          img="https://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png"
          name="Shopify"
          desc="The global commerce platform"
          sub="Software Engineer Intern"
          link="https://shopify.com"
        />
        <Project
          img="https://frc6070.ca/6070-logo.png"
          name="6070: Gryphon Machine"
          desc="FIRST Robotics Team"
          sub="Programming Captain"
          link="https://frc6070.ca"
        />
        <Project
          img="https://www.buildergroop.com/favicon.ico"
          name="Buildergroop"
          desc="The home for ambitious gen-z minds"
          sub="Co-Founder"
          link="https://buildergroop.com"
        />
      </div>

      <h1 className="mt-16 text-2xl font-bold text-white">Side Projects</h1>

      <div className="flex flex-col md:grid md:grid-cols-3 mt-8 gap-y-10">
        <Project
          img="https://www.scoutmachine.io/smLogo.png"
          name="Scout Machine"
          desc="Smarter FRC Data Insights"
          link="https://scoutmachine.io"
        />
        <Project
          img="https://snapsaver.vercel.app/assets/favicon.png"
          name="Snapsaver"
          desc="Export all your Snapchat memories to Google Drive"
          link="https://github.com/heybereket/snapsaver"
        />
        <Project
          img="https://raw.githubusercontent.com/heybereket/oasis/68d0e9602951653ff8dbfdac54a7ca198ced190c/assets/logos/svg/icon.svg"
          name="Oasis"
          desc="The chat and forums platform for communities"
          link="https://github.com/heybereket/oasis"
          sub="Discontinued"
        />
        <Project
          img="https://bereketsemagn.gallerycdn.vsassets.io/extensions/bereketsemagn/lunar/1.4.0/1610896829478/Microsoft.VisualStudio.Services.Icons.Default"
          name="Lunar Theme"
          desc="A minimal, dark and light space theme for VSCode"
          link="https://marketplace.visualstudio.com/items?itemName=bereketsemagn.Lunar"
          sub="10k+ installs"
        />
        <Project
          img="https://ph-files.imgix.net/06fd4318-2865-4dc0-9d11-81461439760d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2"
          name="Color Spark"
          desc="A color scheme plugin for Figma"
          link="https://www.figma.com/community/plugin/934799606018744992/Color-Spark"
          sub="2k+ installs"
        />
        <Project
          img="https://imperialb.in/favicon.ico"
          name="Imperial"
          desc="Minimal text & code editor for the web"
          sub="Contributor"
          link="https://imperialb.in"
        />
        <Project
          name="Mammot"
          desc="Discord bot Slash Command framework for TypeScript"
          link="https://github.com/alii/mammot"
        />
      </div>
    </div>
  );
}
