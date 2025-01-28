import { RootLayout } from "@/components";
import { CookiesData } from "@/data/cookies";

export default function Dynamic() {
  return (
    <RootLayout>
      <div className="relative flex flex-col h-full m-6 text-left">
        {CookiesData.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
            {section.browsers && (
              <div>
                {section.browsers.map((browser, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="font-medium">{browser.name}</h3>
                    <ul className="list-disc list-inside">
                      {browser.steps.map((step, j) => (
                        <li key={j}>{step}</li>
                      ))}
                    </ul>
                    {browser.link && (
                      <a
                        href={browser.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Más información
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </RootLayout>
  );
}
