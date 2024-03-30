import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import "./style.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useCreateCommentMutation } from "../../../api/api";
interface AddCommentProps {
  slug: string;
}
interface AddCommentValues {
  body: string;
}
const commentScheme = yup.object({
  body: yup.string().required(),
});
const AddComment = ({ slug }: AddCommentProps) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AddCommentValues>({
    defaultValues: {
      body: "",
    },
    resolver: yupResolver(commentScheme),
  });
  const [addComment] = useCreateCommentMutation();
  const onSubmit = async (values: AddCommentValues) => {
    console.log(values);
    try {
      await addComment({
        slug: slug!,
        comment: values.body,
      }).unwrap();
    } catch (e) {
      toast.error("Something wen't wrong. Please, try again later");
    }
  };
  return (
    <form className="add__comment" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("body")}
        className="add__comment-text"
        id="comment-field"
        placeholder="Write a comment"
      ></textarea>
      <div className="add__comment-user">
        <span>
          <img
            className="add__comment-user-img"
            src={user?.image}
            alt={user?.username}
          />
        </span>
        <button
          className={`add__comment-btn ${
            isSubmitting ? "add__comment-btn-disabled" : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default AddComment;
