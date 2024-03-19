import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import "./style.scss";
import Container from "../../components/Container";
import { EditorInputs } from "../../types/Editor";

const Editor = () => {
  const { register } = useForm<EditorInputs>({
    defaultValues: {
      title: "",
      desc: "",
      body: "",
      tags: "",
    },
  });
  return (
    <div className="editor">
      <Container>
        <form className="editor__form">
          <Input
            className="edit__form-input form__input"
            placeholder="Article Title"
            {...register("title")}
          />
          <Input
            className="edit__form-input form__input"
            placeholder="What's this article about?"
            {...register("desc")}
          />
          <textarea
            placeholder="Write your article (in markdown)"
            className="edit__form-input edit__form-input-text form__input "
            {...register("body")}
          />
          <Input
            className="edit__form-input form__input"
            placeholder="What's this article about?"
            {...register("tags")}
          />
        </form>
      </Container>
    </div>
  );
};

export default Editor;
