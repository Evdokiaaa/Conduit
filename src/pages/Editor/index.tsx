import { Resolver, useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import "./style.scss";
import Container from "../../components/Container";
import { EditorInputs } from "../../types/Editor";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateArticleMutation } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//TODO Передалай кнопку в UI и вставить сюда
//TODO Сделать обработку ошибок, вынести ошибки в отдельный компонент
const schema = yup.object({
  title: yup.string().required().min(2),
  description: yup.string().required(),
  body: yup.string().required().min(2),
  tags: yup.string().required(),
});
const Editor = () => {
  const [createPost] = useCreateArticleMutation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<EditorInputs>({
    defaultValues: {
      title: "",
      description: "",
      body: "",
      tags: "",
    },
    resolver: yupResolver(schema) as Resolver<EditorInputs>,
  });

  const onSubmit = async (values: EditorInputs) => {
    try {
      const data = await createPost(values).unwrap();
      navigate(`/article/${data.article.slug}`);
    } catch (e) {
      toast.error("An error occured");
    }
  };
  return (
    <div className="editor">
      <Container>
        <form className="editor__form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="edit__form-input form__input"
            placeholder="Article Title"
            {...register("title")}
          />
          <Input
            className="edit__form-input form__input"
            placeholder="What's this article about?"
            {...register("description")}
          />
          <textarea
            placeholder="Write your article (in markdown)"
            className="edit__form-input edit__form-input-text form__input "
            {...register("body")}
          />
          <Input
            className="edit__form-input form__input"
            placeholder="Tags"
            {...register("tags")}
          />
          <button className="editor__btn" type="submit">
            Publish Article
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Editor;
