import React, { useCallback, useEffect } from 'react';
import Sample from '../components/SampleThunk';
import { getPost } from '../modules/sampleThunk';
import { useDispatch, useSelector } from 'react-redux';

const SampleContainer = () => {
  const post = useSelector((state) => state.sampleThunk.post);
  const loadingPost = useSelector((state) => state.loading.loadingPost);

  const dispatch = useDispatch();

  // useCallback :  컴포넌트가 리렌더링 될 때 마다 새로 함수를 만들지 않고  재사용하는 것
  const hadnleGetPost = useCallback((id) => dispatch(getPost(id)), [dispatch]);

  useEffect(() => {
    hadnleGetPost(2);
  }, [hadnleGetPost]); // componentDidMount

  return <Sample post={post} loadingPost={loadingPost} />;
};

export default SampleContainer;
