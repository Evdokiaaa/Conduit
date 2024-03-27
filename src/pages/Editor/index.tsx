import { Resolver, useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import "./style.scss";
import Container from "../../components/Container";
import { EditorInputs } from "../../types/Editor";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useCreateArticleMutation,
  useEditArticleMutation,
  useGetSingleArticleQuery,
} from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormBtn from "../../components/UI/AuthBtn";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { CreateArticleBIO } from "../../types/CreateArticle";
import { EditArticleBIO } from "../../types/EditArticle";
//TODO Сделать обработку ошибок, вынести ошибки в отдельный компонент
const schema = yup.object({
  title: yup.string().required().min(2),
  description: yup.string().required(),
  body: yup.string().required().min(2),
  tags: yup.string().required(),
});
const Editor = () => {
  const [createPost] = useCreateArticleMutation();
  const [editArticle] = useEditArticleMutation();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<EditorInputs>({
    defaultValues: {
      title: "",
      description: "",
      body: "",
      tags: "",
    },
    resolver: yupResolver(schema) as Resolver<EditorInputs>,
  });
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleArticleQuery(
    {
      slug: String(slug),
    },
    { skip: !slug }
  );
  useEffect(() => {
    if (data && slug) {
      reset({
        title: data.article.title,
        description: data.article.description,
        body: data.article.body,
        tags: data.article.tagList.join(", "),
      });
    } else {
      reset({
        title: "",
        description: "",
        body: "",
        tags: "",
      });
    }
  }, [data, reset, slug]);
  //TODO ПОКА ТАК,ПОТОМ ПОФИКСИТЬ. ЧТО ТО С КЭШИРОВАНИЕМ
  const onSubmit = async (values: EditorInputs) => {
    try {
      setLoadingSubmit(true);
      let data: CreateArticleBIO | EditArticleBIO;
      const { body, title, description, tags } = values;
      const updatedData = { body, title, description, tags };
      slug
        ? (data = await editArticle({ ...updatedData, slug }).unwrap())
        : (data = await createPost(values).unwrap());

      navigate(`/article/${data.article.slug}`);
    } catch (e) {
      toast.error("An error occurred");
    } finally {
      setLoadingSubmit(false);
    }
  };
  if (slug && isLoading) {
    return <Loading text="Loading..."></Loading>;
  }
  console.log("Page is loading...");
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
          <FormBtn
            text="Publish Article"
            additionalClass="form__btn-add"
            isLoading={loadingSubmit}
          />
        </form>
      </Container>
    </div>
  );
};

export default Editor;
