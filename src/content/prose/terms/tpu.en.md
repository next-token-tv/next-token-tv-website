---
term: tpu
locale: en
updatedAt: "2026-10-11"
---

## Definition

A tensor processing unit (TPU) is an application-specific integrated circuit (ASIC) designed by Google for machine learning workloads, centered on accelerating the matrix multiplications that dominate neural networks. It is offered primarily as a service through Google Cloud.

## How it works

A TPU computes tensor operations on systolic arrays of matrix-multiply units, using lower-precision formats such as bfloat16 to raise throughput and energy efficiency. It gives up generality to make one class of computation extremely efficient.

## Usage

TPUs are used through Google Cloud to train and serve large models, recommendation systems, and other large-scale machine learning workloads. They suit teams already building in the Google ecosystem, for example with JAX or TensorFlow.

## Related and confusable terms

A [GPU](/en/wiki/terms/gpu) is a broader parallel processor, while a TPU is a tensor-specific ASIC with a narrower scope; a [CPU](/en/wiki/terms/cpu) is the general-purpose processor for serial logic. All three often divide the work within a single AI infrastructure stack.
