import { Button, Tabs, Tab, Textarea, Card, Input } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="h-screen bg-background-gray px-20 pt-6 flex flex-col items-center">
      <h1 className="text-white text-center text-3xl mb-10">Resume Tools (Powered by Gemini)</h1>
      <div className="w-screen text-3xl">
        <Card className="mx-24 p-4 mb-4">
          <Tabs className="">
            <Tab title="Paste" className="">
              <Textarea
                placeholder="Paste your resume here"
                label="Resume"
                size="lg"
                minRows={8}
              />
            </Tab>
            <Tab title="Upload">
              <Input type="file" />
            </Tab>
          </Tabs>
        </Card>
      </div>
      <div className="flex flex-row">
      <Button color="primary" className="self-center mx-2 w-28" size="lg">
        Submit
      </Button>
      <Button color="primary" className="self-center mx-2 w-28" size="lg">
        Add Fluff
      </Button>
      <Button color="primary" className="self-center mx-2 w-28" size="lg">
      Remove Fluff
      </Button>
      <Button color="primary" className="self-center mx-2 w-28" size="lg">
      Parse Resume
      </Button>
      <Button color="primary" className="self-center mx-2 w-28" size="lg">
      Get Feedback
      </Button>
      </div>
      
      <div className="w-screen text-3xl">
        <Card className="mx-24 p-4 my-4">
          <h1 className="text-2xl">Resume {}</h1>
          <p>Hello</p>
        </Card>
      </div>

    </div>
  );
};

export default Home;
