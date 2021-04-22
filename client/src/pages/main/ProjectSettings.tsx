import { ApolloError, useMutation } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router';
import CreateUpdateProject, {
  IProjectForm,
} from '../../components/Forms/CreateUpdateProject';
import { IssueContext } from '../../context/issue';
import { ProjectContext } from '../../context/project';
import { UPDATE_PROJECT } from '../../graphql/projectMutations';
import { GET_PROJECTS } from '../../graphql/projectQuery';
import { isCreateIssueLink } from '../../utils/checkLink';

interface IProjectProps {
  project: {
    category: string;
    createdAt: string;
    description: string;
    id: string;
    name: string;
    __typename: string;
  };
}

interface ParamType {
  projectId: string;
}

const ProjectSettings = ({ project }: IProjectProps) => {
  const { projectId } = useParams<ParamType>();
  const { setSidebarState } = useContext(ProjectContext);
  const { setIssueState } = useContext(IssueContext);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IProjectForm>();

  const [updateProject, { loading }] = useMutation(UPDATE_PROJECT, {
    update(proxy, result) {
      const data: any = proxy.readQuery({
        query: GET_PROJECTS,
      });
      proxy.writeQuery({
        query: GET_PROJECTS,
        data: {
          getProjects: data.getProjects.map((project: any) =>
            project.id === result.data.updateProject.id
              ? { ...project, ...result.data.updateProject }
              : project
          ),
        },
      });
    },
    onError(err: ApolloError) {
      console.error(err.graphQLErrors);
    },
  });

  useEffect(() => {
    if (isCreateIssueLink(location.pathname)) {
      setIssueState({ open: true });
    }
  }, [location.pathname, setIssueState]);

  useEffect(() => {
    setSidebarState({ currProject: projectId, projectAction: 'settings' });
  }, [setSidebarState, projectId]);

  return (
    <CreateUpdateProject
      updateForm
      defaultValues={project}
      callback={updateProject}
      loading={loading}
      errors={errors}
      register={register}
      handleSubmit={handleSubmit}
      control={control}
    />
  );
};

export default ProjectSettings;
