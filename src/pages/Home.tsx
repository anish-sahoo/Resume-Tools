import { Button, Tabs, Tab, Textarea, Card, Spinner } from "@nextui-org/react";
import { useState } from "react";
import getGeminiAnswer from "../api/gemini.service";
import Markdown from 'react-markdown';

const Home = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetFeedback = async (index: number) => {
    setLoading(true);
    const res = await getGeminiAnswer(text, index);
    setResponse(res);
    setLoading(false);
  };
  return (
    <div className="h-full min-h-screen bg-background-gray px-20 pt-6 flex flex-col items-center">
      <h1 className="text-white text-center text-3xl mb-10">
        Resume Tools (Powered by Gemini)
      </h1>
      <div className="w-screen text-3xl">
        <Card className="mx-4 md:mx-8 lg:mx-24 p-4 mb-4">
          <Tabs className="">
            <Tab title="Paste" className="">
              <Textarea
                placeholder="Paste your resume here"
                label="Resume"
                size="lg"
                minRows={8}
                id="myTextarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Tab>
            <Tab title="Upload">
              {/* <Input type="file" /> */}
              <p>Will add soon</p>
            </Tab>
          </Tabs>
        </Card>
      </div>
      <div className="flex flex-row flex-wrap w-screen items-center justify-center">
        <Button
          className="self-center mx-2 w-28 m-2"
          size="lg"
          onClick={() => handleGetFeedback(0)}
        >
          Add Fluff
        </Button>
        <Button
          className="self-center mx-2 w-28 m-2"
          size="lg"
          onClick={() => handleGetFeedback(1)}
        >
          Remove Fluff
        </Button>
        <Button
          className="self-center mx-2 w-28 m-2"
          size="lg"
          onClick={() => handleGetFeedback(2)}
        >
          Parse Resume
        </Button>
        <Button
          className="self-center mx-2 w-28 m-2"
          size="lg"
          onClick={() => handleGetFeedback(3)}
        >
          Get Feedback
        </Button>
        <Button
          className="self-center mx-2 w-28 m-2"
          size="lg"
          onClick={() => setResponse("")}
        >
          Copy Results
        </Button>
        <Button
          className="self-center mx-2 w-28 m-2"
          size="lg"
          onClick={() => setResponse("")}
        >
          Clear
        </Button>
      </div>
      <div className="w-screen">
        <Card className="mx-4 md:mx-8 lg:mx-24 p-6 my-4">
          <h1 className="text-2xl pb-2">Result:</h1>
          <Card className="p-4 bg-zinc-800" isBlurred>
          {loading ? <Spinner /> : <div><Markdown>{response}</Markdown></div>}
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default Home;
