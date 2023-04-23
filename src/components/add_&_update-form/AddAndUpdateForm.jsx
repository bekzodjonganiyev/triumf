import { useState, useRef } from "react";
import {
  Upload,
  Segmented,
  Input,
  Spin,
  Modal,
  Checkbox,
  Popconfirm,
} from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  LoadingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { useMutation, useQuery } from "@tanstack/react-query";

import apiClient from "../../helper/apiClient";

export const AddAndUpdateForm = ({
  imgKey,
  type,
  component,
  url,
  urlById,
  title,
  handleClose,
}) => {
  const imgRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [orgValues, setOrgValues] = useState({});
  const [adminValues, setAdminValues] = useState({});
  const [status, setStatus] = useState(true);

  const addAndUpdateMutation = useMutation({
    mutationFn: (data) => {
      if (type === "add") {
        return apiClient.add(url, data);
      } else {
        return apiClient.update(urlById, data);
      }
    },
    onSuccess: () => {
      setTimeout(() => handleClose(), 1000);
      setTimeout(() => window.location.reload(), 2000);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => {
      return apiClient.delete(id);
    },
    onSuccess: () => {
      setTimeout(() => handleClose(), 1000);
      window.location.reload(false);
      window.location.pathname = "organizations";
    },
  });

  const getByIdQuery = useQuery({
    queryKey: ["organizationById"],
    queryFn: () => (urlById ? apiClient.getById(urlById) : null),
    onSuccess: (data) => {
      if (urlById) {
        setOrgValues(data.data);
        setAdminValues(data.data);
      }
    },
    refetchOnWindowFocus: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Oraganizations part
    if (component === "organizations") {
      formData.append("name", orgValues.name);
      formData.append("inn", Number(orgValues.inn));
      formData.append("password", orgValues.password);
      formData.append("price", Number(orgValues.price));
      formData.append("is_active", status);
    }

    // Admins part
    if (component === "admins") {
      formData.append("full_name", adminValues.full_name);
      formData.append("phone", adminValues.phone);
      formData.append("password", adminValues.password);
      formData.append(
        "is_organizations",
        adminValues.is_organizations ?? false
      );
      formData.append("is_courier", adminValues.is_courier ?? false);
      formData.append("is_statistic", adminValues.is_statistic ?? false);
      formData.append("is_incomes", adminValues.is_incomes ?? false);
      formData.append("is_archive", adminValues.is_archive ?? false);
      formData.append("is_add_admin", adminValues.is_add_admin ?? false);
      formData.append("is_active", status);
    }
    type !== "add" && formData.append(imgKey, fileList[0].originFileObj);

    addAndUpdateMutation.mutate(formData);
  };

  function handleInputValue(e) {
    const { name, value, checked } = e.target;
    component === "organizations"
      ? setOrgValues((prev) => ({ ...prev, [name]: value }))
      : setAdminValues((prev) => ({
          ...prev,
          [name]: checked ? checked : value,
        }));
  }

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <Modal
      open={true}
      centered
      onOk={() => handleClose()}
      onCancel={() => handleClose()}
      footer={[]}
      closeIcon={<p className="text-sm text-black">X</p>}
    >
      <form className="flex flex-col gap-4 px-14" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center my-4">{title}</h1>
        {type !== "add" ? (
          <ImgCrop rotationSlider>
            <Upload
              listType="picture-circle"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              maxCount={1}
              ref={imgRef}
              className="text-center"
              name="icon"
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </ImgCrop>
        ) : null}
        {component === "organizations" && (
          <>
            <Input
              placeholder="INN"
              type="number"
              onChange={handleInputValue}
              value={orgValues?.inn}
              name="inn"
              required
            />
            <Input.Password
              placeholder="Kod"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              name="password"
              onChange={handleInputValue}
              value={orgValues?.password}
              required
            />
            <Input
              placeholder="Tashkilot nomi"
              name="name"
              onChange={handleInputValue}
              value={orgValues?.name}
              required
            />
            <Input
              addonAfter="UZS"
              placeholder="Har bir xat uchun summa"
              name="price"
              onChange={handleInputValue}
              value={orgValues?.price}
              required
            />
          </>
        )}
        {component === "admins" && (
          <>
            <Input
              placeholder="Admin nomini kiriting"
              type="text"
              onChange={handleInputValue}
              value={adminValues?.full_name}
              name="full_name"
              required
            />
            <Input.Password
              placeholder="Parol"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              name="password"
              onChange={handleInputValue}
              value={adminValues?.password}
              min={8}
              required
            />
            <Input
              placeholder="Telefon raqam"
              name="phone"
              onChange={handleInputValue}
              value={adminValues?.phone}
              required
            />
            <Checkbox onChange={handleInputValue} name="is_organizations">
              Tashkilotlar
            </Checkbox>
            <Checkbox onChange={handleInputValue} name="is_courier">
              Kurierlar
            </Checkbox>
            <Checkbox onChange={handleInputValue} name="is_statistic">
              Statistika
            </Checkbox>
            <Checkbox onChange={handleInputValue} name="is_incomes">
              Tushumlar
            </Checkbox>
            <Checkbox onChange={handleInputValue} name="is_archive">
              Arxiv
            </Checkbox>
            <Checkbox onChange={handleInputValue} name="is_add_admin">
              Admin qo’shish
            </Checkbox>
          </>
        )}
        <Segmented
          block
          options={[
            { value: true, label: "Faol" },
            { value: false, label: "Nofaol" },
          ]}
          value={status}
          onChange={(e) => setStatus(e)}
          className="py-1 px-2 bg-[0,0,0,0.01]"
        />
        <p
          className={`text-center my-2 ${
            addAndUpdateMutation.isError ? "text-red-600" : "text-green-600"
          } `}
        >
          {addAndUpdateMutation.isError
            ? addAndUpdateMutation.error?.message
            : addAndUpdateMutation.isSuccess
            ? "Muvaffaqiyatli"
            : ""}
        </p>
        <button
          type="submit"
          className="bg-primary text-white text-lg py-3 px-6 rounded-md hover:bg-violet-500"
        >
          {addAndUpdateMutation.isLoading ? (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 24,
                    color: "white",
                  }}
                  spin
                />
              }
            />
          ) : (
            "Saqlash"
          )}
        </button>
      </form>
      <Popconfirm
        title="Bu tashkilotni o'chirishni xoxlaysizmni?"
        icon={
          <QuestionCircleOutlined
            style={{
              color: "red",
            }}
          />
        }
        okButtonProps={{ style: { background: "red" } }}
        onConfirm={() => deleteMutation.mutate(urlById)}
      >
        <button className="bg-none text-red-600 underline text-lg text-center inline w-full mt-5">
          {urlById ? (
            <>
              {deleteMutation.isLoading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 24,
                        color: "white",
                      }}
                      spin
                    />
                  }
                />
              ) : (
                "O'chirish"
              )}
            </>
          ) : null}
        </button>
      </Popconfirm>
    </Modal>
  );
};
