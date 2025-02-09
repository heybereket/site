export default function Home() {
  const birthDate = new Date("2008-09-10");
  const today = new Date();

  const yearDiff = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  const age = hasHadBirthdayThisYear ? yearDiff : yearDiff - 1;

  return (
    <div className="min-h-screen bg-white">
      <main className="p-8 text-black">
        <p>
          sup, im bereket. i took a pretty unconventional path to get where i am
          today.
        </p>

        <br />

        <b>a lil bit about me:</b>
        <ul>
          <li>• {age} yrs old</li>
          <li>• software engineer</li>
          <li>• ethopian 🇪🇹, born in kenya 🇰🇪, raised in canada 🇨🇦</li>
          <li>• currently living in toronto, canada (moved here when i was 4 yrs old) 🇨🇦</li>
          <li>• started coding when i was 10 years old 💻</li>
          <li>
            • was in{" "}
            <a href="https://www.ibo.org/" target="_blank" rel="noreferrer">
              ib
            </a>
            , but i dropped out to pursue entrepreneurship
          </li>
          <li>• 26k+ followers on twitter</li>
          <li>• black belt in taekwondo 🥋</li>
        </ul>

        <br />

        <b>what i do now:</b>
        <ul>
          <li>
            • co-founder, cto at{" "}
            <a href="https://butler.ai" target="_blank" rel="noreferrer">
              butler
            </a>{" "}
            (raised $1.2m)
            <ul className="ml-4">
              <li>
                • AI-powered home for all your data - search, chat, and organize
                instantly
              </li>
              <li>
                • automatically process emails, calendar, tasks, and messages
              </li>
              <li>
                • sync with your apps in seconds and automate meeting notes &
                responses
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <b>where i&apos;ve worked:</b>
        <ul>
          <li>• swe intern @ shopify (joined at 13 yrs old)</li>
          <li>• founding engineer @ tunnel (neo &apos;23)</li>
          <li>• founding engineer @ aviato</li>
        </ul>

        <br />

        <b>what ive done:</b>
        <ul>
          <li>• product hunt maker of the year (runner up) &apos;21</li>
          <li>• 250k+ monthly active users across all my apps</li>
          <li>
            • started a community called buildergroop in &apos;21, over 7k+
            members now
          </li>
          <li>• finalist in nasa space apps hackathon (300k+ students)</li>
          <li>• made a vscode extension with 12k+ installs</li>
          <li>• made a figma plugin with 4k+ installs</li>
          <li>• had 2 successful startup exits</li>
        </ul>

        <br />

        <b>how to reach me:</b>
        <ul>
          <li>
            • bereket at butler dot ai
          </li>
          <li>
            •{" "}
            <a href="https://x.com/heybereket" target="_blank" rel="noreferrer">
              x
            </a>
          </li>
          <li>
            •{" "}
            <a
              href="https://www.linkedin.com/in/bereketsemagn"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            •{" "}
            <a
              href="https://github.com/heybereket"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <li>
            • discord: <code className="text-xs bg-gray-200 rounded px-2">heybereket</code>
          </li>
        </ul>
      </main>
    </div>
  );
}
