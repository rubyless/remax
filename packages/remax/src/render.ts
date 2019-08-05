import * as React from 'react';
import ReactReconciler from 'react-reconciler';
import hostConfig from './hostConfig';

const ReactReconcilerInst = ReactReconciler(hostConfig as any);

function getPublicRootInstance(container: any) {
  var containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  return containerFiber.child.stateNode;
}

export default function render(
  rootElement: React.ReactElement | null,
  container: any
) {
  // Create a root Container if it doesnt exist
  if (!container._rootContainer) {
    container._rootContainer = ReactReconcilerInst.createContainer(
      container,
      false,
      false
    );
  }

  ReactReconcilerInst.updateContainer(
    rootElement,
    container._rootContainer,
    null,
    () => {}
  );

  return getPublicRootInstance(container._rootContainer);
}
