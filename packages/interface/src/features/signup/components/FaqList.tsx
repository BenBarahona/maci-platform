import { Heading } from "~/components/ui/Heading";

import { FAQItem } from "./FaqItem";

export const FAQList = (): JSX.Element => (
  <div id="faq-section" className="mt-28 flex flex-col items-center justify-center dark:text-white">
    <Heading size="6xl">Round details: How does this work?</Heading>

    <p className="flex max-w-screen-md gap-2 text-center text-xl dark:text-gray-400 mb-8">
      This is a Funding round for individuals that have made valuable contributions to 
      the Ethereum ecosystem in the past. The way it works is: If you have done impactful 
      things related to Ethereum, you can apply, a committee of evaluators will rank your 
      impact and you can get rewards (USDC, flights to Devcon or even a Macbook)
    </p>

    <FAQItem
      description="The goal of this round is to reward and support individuals who have 
        made valuable contributions in the past, without being properly recognized/funded."
      title="What is the goal of the round?"
    />

    <FAQItem
      description={
        <>
      Anyone in the world that fits the following requirements can apply:
      <br />
        1. Previous impact done: Applicants must demonstrate a clear, quantifiable impact
      <br />
        2. Unrecognized impact: Applicants must show that their project has received insufficient recognition or funding relative to its impact
      <br />
          3. Your contributions must have been done as an individual (no teams) and outside of your work/company&apos;s impact.
      </>
      }
      title="What are the requirements to apply?"
    />

<FAQItem
  title="What types of contributions are eligible?"
  description={
    <div className="flex flex-col gap-4">
      <p>Here&apos;s a non-comprehensive list, but if you&apos;ve done something different that has been impactful, apply!</p>

      <ul className="list-disc pl-5">
        <li>Founded or Led projects in the Ethereum ecosystem</li>
        <li>Improved or participated in governance in DAOs</li>
        <li>Blockchain clubs</li>
        <li>Education in universities</li>
        <li>Brought new users</li>
        <li>Organized hackathons, workshops, or meetups with significant impact</li>
        <li>Created developer or governance tooling</li>
        <li>Bonus points for Optimism-related contributions</li>
      </ul>
    </div>
  }
/>

<FAQItem
  title="What contributions are NOT eligible to participate?"
  description={
    <div className="flex flex-col gap-4">
      <p>These types of contributions are out-of-scope for this round. Do NOT apply for any of these ones, as you&apos;ll be rejected:</p>

      <ul className="list-disc pl-5">
        <li>Basic Participation or Passive Involvement: Being a member or attendee of web3 communities or events without active contribution.</li>
        <li>Short-term Events with No Long-term Impact: One-time events or initiatives without a sustainable or lasting impact on the ecosystem.</li>
        <li>Non-Web3 Related Projects: Contributions that do not involve blockchain, web3, or crypto.</li>
        <li>Purely Academic Research: Academic research that lacks a direct impact.</li>
        <li>Personal Blogs or Non-Educational Content: Content that is primarily personal or does not educate about web3.</li>
        <li>Spam/shill/duplicates or venture-funded projects.</li>
      </ul>
    </div>
  }
/>

  <FAQItem
    title="I want to apply, what do I need to do?"
    description={
      <div className="flex flex-col gap-4">
        <ul className="list-disc pl-5">
          <li>Make sure your contributions fit inside the criteria.</li>
          <li>Check out this walkthrough.</li>
          <li>Apply before October 8th.</li>
        </ul>
  
        <p>
          <a href="https://t.me/+uVVfFOGtRJc3N2Yx" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Have questions? Ask them on this Telegram group.
          </a>
        </p>
  
        <p>We have a cap of 50 submissions, apply before we reach the cap.</p>
      </div>
    }
  />

<FAQItem
  title="Who is organizing this and why?"
  description={
    <div className="flex flex-col gap-4">
      <ul className="list-disc pl-5">
        <li>Cryptoversidad is the place where Latam people and universities learn about and engage with blockchain technology.</li>
        <li>We create and host courses about blockchain in universities.</li>
        <li>We&apos;ve worked with top brands in the industry such as Optimism, Arbitrum, Lido, Aave. Check out the projects <a href="#" className="text-blue-600 underline">here</a>.</li>
      </ul>
    </div>
  }
/>

<FAQItem
  title="Rewards"
  description={
    <div className="flex flex-col gap-4">
      <p>This round will reward the 10 Top-voted Builders according to the following table:</p>
      
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Score</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">USD Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Flight & Ticket to Devcon</td>
            <td className="border border-gray-300 px-4 py-2">$2,500</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">Cash prize</td>
            <td className="border border-gray-300 px-4 py-2">$2,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">Flight, accommodation and ticket for Permissionless Conference</td>
            <td className="border border-gray-300 px-4 py-2">$1,500</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">Macbook Air M3</td>
            <td className="border border-gray-300 px-4 py-2">$1,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">Cash prize</td>
            <td className="border border-gray-300 px-4 py-2">$750</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">Cash prize</td>
            <td className="border border-gray-300 px-4 py-2">$600</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">7</td>
            <td className="border border-gray-300 px-4 py-2">Devcon Ticket</td>
            <td className="border border-gray-300 px-4 py-2">$500</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">8</td>
            <td className="border border-gray-300 px-4 py-2">Devcon Ticket</td>
            <td className="border border-gray-300 px-4 py-2">$500</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">9</td>
            <td className="border border-gray-300 px-4 py-2">Devcon Ticket</td>
            <td className="border border-gray-300 px-4 py-2">$500</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">10</td>
            <td className="border border-gray-300 px-4 py-2">Cash prize</td>
            <td className="border border-gray-300 px-4 py-2">$150</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2" colSpan={2}><strong>10 winners</strong></td>
            <td className="border border-gray-300 px-4 py-2"><strong>$10,000 USD</strong></td>
          </tr>
        </tbody>
      </table>

      <p>Prices will be paid out in USDC on OP Mainnet, and winners can decide how to use the money. (Exception for Devcon tickets)</p>
    </div>
  }
/>


  </div>
);
