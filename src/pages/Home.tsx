import { Button, Tabs, Tab, Textarea, Card, Spinner } from "@nextui-org/react";
import { useState } from "react";
import getGeminiAnswer from "../api/gemini.service";

const Home = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetFeedback = async (index: number) => {
    setLoading(true);
    const res = await getGeminiAnswer(text);
    setResponse(res);
    setLoading(false);
  };
  return (
    <div className="h-screen bg-background-gray px-20 pt-6 flex flex-col items-center">
      <h1 className="text-white text-center text-3xl mb-10">
        Resume Tools (Powered by Gemini)
      </h1>
      <div className="w-screen text-3xl">
        <Card className="mx-24 p-4 mb-4">
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
      <div className="flex flex-row">
        <Button
          className="self-center mx-2 w-28"
          size="lg"
          onClick={() => handleGetFeedback(0)}
        >
          Add Fluff
        </Button>
        <Button
          className="self-center mx-2 w-28"
          size="lg"
          onClick={() => handleGetFeedback(1)}
        >
          Remove Fluff
        </Button>
        <Button
          className="self-center mx-2 w-28"
          size="lg"
          onClick={() => handleGetFeedback(2)}
        >
          Parse Resume
        </Button>
        <Button
          className="self-center mx-2 w-28"
          size="lg"
          onClick={() => handleGetFeedback(3)}
        >
          Get Feedback
        </Button>
        <Button
          className="self-center mx-2 w-28"
          size="lg"
          onClick={() => setResponse("")}
        >
          Clear
        </Button>
      </div>

      <div className="w-screen text-3xl">
        <Card className="mx-24 p-4 my-4">
          <h1 className="text-2xl">Resume {}</h1>
          <p>Hello</p>
          {loading ? <Spinner /> : <p>response</p>}
        </Card>
      </div>
    </div>
  );
};

export default Home;
