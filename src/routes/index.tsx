import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, routeLoader$, zod$ } from "@builder.io/qwik-city";

export const useRouteAction = routeAction$(() => {
  return {
    happy: "happy",
    day: "day",
  };
});

export const useRouteActionWithFail = routeAction$((data, requestEvent) => {
  if (Math.random() > 1) {
    return requestEvent.fail(500, {
      sad: "sad",
      errorMessage: "why",
    });
  }

  return {
    happy: "happy",
    day: "day",
  };
});

export const useRouteActionWithFailWithValidation = routeAction$((data, requestEvent) => {
  if (Math.random() > 1) {
    return requestEvent.fail(500, {
      sad: "sad",
      errorMessage: "why",
    });
  }

  return {
    happy: "happy",
    day: "day",
  };
}, zod$({}));

export const useRouteLoader = routeLoader$(() => {
  return {
    happy: "happy",
    day: "day",
  };
});

export const useRouteLoaderWithFail = routeLoader$((requestEvent) => {
  if (Math.random() > 1) {
    return requestEvent.fail(500, {
      sad: "sad",
      errorMessage: "why",
    });
  }

  return {
    happy: "happy",
    day: "day",
  };
});

export const useRouteLoaderWithFailWithValidation = routeLoader$((requestEvent) => {
  if (Math.random() > 1) {
    return requestEvent.fail(500, {
      sad: "sad",
      errorMessage: "why",
    });
  }

  return {
    happy: "happy",
    day: "day",
  };
}, zod$({}));

export default component$(() => {
  const routeAction = useRouteAction();
  routeAction.value?.happy;
  routeAction.value?.day;

  const routeActionWithFail = useRouteActionWithFail();
  routeActionWithFail.value?.happy;
  routeActionWithFail.value?.day;
  routeActionWithFail.value?.sad;
  routeActionWithFail.value?.errorMessage;

  const routeActionWithFailWithValidation = useRouteActionWithFailWithValidation();
  routeActionWithFailWithValidation.value?.happy;
  routeActionWithFailWithValidation.value?.day;
  routeActionWithFailWithValidation.value?.sad;
  routeActionWithFailWithValidation.value?.errorMessage;

  const routeLoader = useRouteLoader();
  routeLoader.value.happy;
  routeLoader.value.day;

  const routeLoaderWithFail = useRouteLoaderWithFail();
  routeLoaderWithFail.value.happy;
  routeLoaderWithFail.value.day;
  routeLoaderWithFail.value.sad;
  routeLoaderWithFail.value.errorMessage;

  const routeLoaderWithFailWithValidation = useRouteLoaderWithFailWithValidation();
  routeLoaderWithFailWithValidation.value.happy;
  routeLoaderWithFailWithValidation.value.day;
  routeLoaderWithFailWithValidation.value.sad;
  routeLoaderWithFailWithValidation.value.errorMessage;

  return <></>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
